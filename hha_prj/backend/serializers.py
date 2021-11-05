from django.db.models import fields
from backend.models import RehabMonthlyRecord
from rest_framework import serializers
from backend.models import MaternityMonthlyRecord, MonthlyRecord 
from backend.models import CommunityHealthMonthlyRecord, CustomUser 
from backend.models import NICUPaedsMonthlyRecord, PatientCaseStudyRecord
from backend.models import StaffRecognitionCaseStudyRecord, Department, Role
from backend.models import MonthlyRecordPrimaryData, DischargedAlivePatientRecord, PatientDiedBefore48hRecords, PatientDiedAfter48hRecords, SelfDischargedRecords, StayedInTheWardRecords, AdmissionRecords
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

#Monthly Record Serializer
class MonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRecord
        fields = '__all__'
        
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
        return data

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'
    
class MonthlyRecordPrimaryDataSerializer(serializers.ModelSerializer):
    created_at = serializers.DateField(required = True)
    department = serializers.CharField(required = False, allow_blank = False)
    Date_time_submitted = serializers.DateTimeField(required=True)

    beds_available = serializers.IntegerField(required=True)
    bed_days = serializers.IntegerField(required=True)
    patient_days = serializers.IntegerField(required=True)
    hospitalized = serializers.IntegerField(required=True)
    discharged_alive =serializers.IntegerField(required=True)

    died_before_48h = serializers.IntegerField(required=True)
    died_after_48h = serializers.IntegerField(required=True)
    days_hospitalised = serializers.IntegerField(required=True)
    referrals =serializers.IntegerField(required=True)
    transfers = serializers.IntegerField(required=True)
    self_discharged = serializers.IntegerField(required=True)
    stayed_in_the_ward =serializers.IntegerField(required=True)
    admissions =serializers.IntegerField(required=True)
    class Meta:
        model = MonthlyRecordPrimaryData
        fields = '__all__'

class DischargedAlivePatientRecordSerializer(serializers.ModelSerializer):
    patient_discharged_diagnosis = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    days_in_rehab = serializers.IntegerField(required=True, allow_null=False)
    discharge_reason = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    discharge_outcome_ADLs_selfcare = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    discharge_outcome_mobility = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    mobility_device_given = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    discharge_location = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    discharge_employment_status = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    class Meta:
        model = DischargedAlivePatientRecord
        fields = '__all__'


class PatientDiedBefore48hRecordsSerializer(serializers.ModelSerializer):
    patient_diagnosis = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    patient_age = serializers.IntegerField(required=True, allow_null=False)
    cause_of_death = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    class Meta:
        model = PatientDiedBefore48hRecords
        fields = '__all__'

class PatientDiedAfter48hRecordsSerializer(serializers.ModelSerializer):

    patient_diagnosis = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    patient_age = serializers.IntegerField(required=True, allow_null=False)
    cause_of_death = serializers.CharField(required=True, allow_blank=False, allow_null=False)
    class Meta:
        model = PatientDiedAfter48hRecords
        fields = '__all__'
    
class SelfDischargedRecordsSerializer(serializers.ModelSerializer):
     reason_for_self_discharge = serializers.CharField(required=True, allow_blank=False, allow_null=False)
     class Meta:
        model = SelfDischargedRecords
        fields = '__all__'

class StayedInTheWardRecordsSerializer(serializers.ModelSerializer):
    not_ready_from_therapy_standpoint = serializers.IntegerField(required=True, allow_null=False)
    wound_care = serializers.IntegerField(required=True, allow_null=False)
    other_medical_reason = serializers.IntegerField(required=True, allow_null=False)
    financial_reason = serializers.IntegerField(required=True, allow_null=False)

    _1_to_3_months = serializers.IntegerField(required=True, allow_null=False)
    _3_to_6_months = serializers.IntegerField(required=True, allow_null=False)
    _6_to_12_months = serializers.IntegerField(required=True, allow_null=False)
    _1_to_2_years =serializers.IntegerField(required=True, allow_null=False)
    _2_to_3_years =serializers.IntegerField(required=True, allow_null=False)
    _3_plus_years = serializers.IntegerField(required=True, allow_null=False)
    class Meta:
        model = StayedInTheWardRecords
        fields = '__all__'

class AdmissionRecordsSerializer(serializers.ModelSerializer):
    quarter_morin = serializers.IntegerField(required=True, allow_null=False)
    cap_haitian =serializers.IntegerField(required=True, allow_null=False)
    department_nord = serializers.IntegerField(required=True, allow_null=False)
    other_departments = serializers.IntegerField(required=True, allow_null=False)
    class Meta:
        model = AdmissionRecords
        fields = '__all__'