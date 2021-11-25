from django.db.models import fields
from rest_framework import serializers
from backend.models import MonthlyRecord 
from backend.models import CustomUser 
from backend.models import Department, Role, CurrentFieldsList
from backend.models import DischargedAliveRehabGreenData
from rest_framework.validators import UniqueValidator
from backend.models import CaseStudyType, CaseStudy
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
class CustomUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        required=False,
        allow_blank=True,
        allow_null=True,
        validators=[
            UniqueValidator(
                queryset=CustomUser.objects.all(),
                message="This username is already taken!",
            )
        ],
    )
    
    password = serializers.CharField(
        min_length=8, 
        write_only=True, 
        required=True
    )
    class Meta:
        model = CustomUser
        fields = ("username", "password", "department", "role")
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(
            **validated_data
        )
        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance

class CustomTokenPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        data["username"] = str(self.user.username)
        data["user_id"] = str(self.user.pk)
        data["department"] = str(self.user.department)
        data["role"] = str(self.user.role)
        return data

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'
    
class MonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRecord
        fields = '__all__'
class DischargedAliveRehabGreenDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DischargedAliveRehabGreenData
        fields = '__all__'

class CurrentFieldListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentFieldsList
        fields = '__all__'

class CaseStudyTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseStudyType
        fields = '__all__'
        
class CaseStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseStudy
        fields = '__all__'
