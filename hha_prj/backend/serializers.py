from django.db.models import fields
from backend.models import RehabMonthlyRecord
from rest_framework import serializers
from backend.models import MaternityMonthlyRecord, MonthlyRecord 
from backend.models import CommunityHealthMonthlyRecord, CustomUser 
from backend.models import NICUPaedsMonthlyRecord, PatientCaseStudyRecord
from backend.models import StaffRecognitionCaseStudyRecord, Department, Role, CurrentFieldsList
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class NICUPaedsMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = NICUPaedsMonthlyRecord
        fields = '__all__'

# Rehab Monthly Record Serializer
class RehabMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = RehabMonthlyRecord
        fields = '__all__'

# Maternity Monthly Record Serializer
class MaternityMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaternityMonthlyRecord
        fields = '__all__'         


class PatientCaseStudyRecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = PatientCaseStudyRecord
        fields = '__all__'


class StaffRecognitionCaseStudyRecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = StaffRecognitionCaseStudyRecord
        fields = '__all__'    

# Community health Record Serializer
class CommunityHealthMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityHealthMonthlyRecord
        fields = '__all__'          

# CustomerUser Serializer
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

# Token Pair Serializer
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

class CurrentFieldListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentFieldsList
        fields = '__all__'
